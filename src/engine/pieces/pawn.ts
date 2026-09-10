import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

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

        const squareInFront: Square = Square.at(fromRow + this.stepOffset, fromCol);

        if (board.getPiece(squareInFront) !== undefined) return [];

        destSquares.push(squareInFront);

        const squareTwoInFront: Square = Square.at(fromRow + (2 * this.stepOffset), fromCol);
        if (fromRow === this.startRow && board.getPiece(squareTwoInFront) === undefined) {
            destSquares.push(squareTwoInFront);
        }

        return destSquares;
    }
}