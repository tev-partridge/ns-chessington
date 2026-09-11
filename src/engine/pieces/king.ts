import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const fromSquare: Square = board.findPiece(this);

        const destSquares: Square[] = [];

        const fromRow: number = fromSquare.row;
        const fromCol: number = fromSquare.col;

        for (let rowOffset: number = -1; rowOffset <= 1; rowOffset++ ) {
            for (let colOffset: number = -1; colOffset <= 1; colOffset += 1) {
                if (colOffset === 0 && rowOffset === 0) continue;

                let destRow: number = fromRow + rowOffset;
                let destCol: number = fromCol + colOffset;

                if (destRow < 0 || destRow > 7 || destCol < 0 || destCol > 7) continue;

                const destSquare = new Square(destRow, destCol);
                const piece = board.getPiece(destSquare);
                if (piece !== undefined && (piece.player === this.player || piece instanceof King)) continue;

                destSquares.push(destSquare);
            }
        }

        return destSquares;
    }
}
