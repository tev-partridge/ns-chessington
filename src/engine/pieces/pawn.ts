import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Pawn extends Piece {
    private startRow: number;
    private stepOffset: number;

    public constructor(player: Player) {
        super(player);
        this.startRow = this.player === Player.BLACK ? 6 : 1;
        this.stepOffset = this.player === Player.BLACK ? -1 : 1;
    }

    public getAvailableMoves(board: Board) {
        const fromSquare: Square = board.findPiece(this);
        const fromRow: number = fromSquare.row;
        const fromCol: number = fromSquare.col;

        const destSquares: Square[] = [];

        const destRow: number = fromRow + this.stepOffset;
        if (destRow < 0 || destRow > 7) return destSquares;

        const squareInFront: Square = Square.at(destRow, fromCol);
        if (board.getPiece(squareInFront) === undefined) {
            destSquares.push(squareInFront);

            const squareTwoInFront: Square = Square.at(fromRow + (2 * this.stepOffset), fromCol);
            if (fromRow === this.startRow && board.getPiece(squareTwoInFront) === undefined) {
                destSquares.push(squareTwoInFront);
            }
        }

        for (const colOffset of [-1, 1]) {
            const destCol: number = fromCol + colOffset;
            if (destCol < 0 || destCol > 7) continue;

            const diagonalSquare: Square = Square.at(destRow, destCol);
            const piece = board.getPiece(diagonalSquare);
            if (piece !== undefined && piece.player !== this.player && !(piece instanceof King)) {
                destSquares.push(diagonalSquare);
            }
        }

        return destSquares;
    }
}