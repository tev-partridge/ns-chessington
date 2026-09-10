import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        const fromSquare: Square = board.findPiece(this);

        const destSquares: Square[] = [];

        const row: number = fromSquare.row;
        const col: number = fromSquare.col;

        for(let i: number = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i === col) continue;
            destSquares.push(Square.at(row, i));
        }
        for(let i: number = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i === row) continue;
            destSquares.push(Square.at(i, col));
        }

        return destSquares;
    }
}
