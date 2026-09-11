import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from './king';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const fromSquare: Square = board.findPiece(this);

        const fromRow: number = fromSquare.row;
        const fromCol: number = fromSquare.col;

        let destSquares: Square[] = [];

        for (let rowOffset: number = -2; rowOffset <= 2; rowOffset++) {
            for (let colOffset: number = -2; colOffset <= 2; colOffset++) {
                if (Math.abs(rowOffset) + Math.abs(colOffset) !== 3) continue;
                if (fromRow + rowOffset < 0 || fromRow + rowOffset > 7 || fromCol + colOffset < 0 || fromCol + colOffset > 7) continue;

                const destSquare = new Square(fromRow + rowOffset, fromCol + colOffset);
                const piece = board.getPiece(destSquare);
                if (piece !== undefined && (piece.player === this.player || piece instanceof King)) continue;

                destSquares.push(destSquare);
            }
        }

        return destSquares;
    }
}
