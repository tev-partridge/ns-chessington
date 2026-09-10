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

        let destSquares: Square[] = [];

        destSquares.push(Square.at(fromSquare.row + this.stepOffset, fromSquare.col));
        if (fromSquare.row === this.startRow) {
            destSquares.push(Square.at(fromSquare.row + (2 * this.stepOffset), fromSquare.col));
        }

        return destSquares;
    }
}