import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const fromSquare: Square = board.findPiece(this);

        let destSquares: Square[] = [];

        if (this.player === Player.BLACK) {
            destSquares.push(Square.at(fromSquare.row - 1, fromSquare.col));
        } else {
            destSquares.push(Square.at(fromSquare.row + 1, fromSquare.col));
        }

        return destSquares;
    }
}