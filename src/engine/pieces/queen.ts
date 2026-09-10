import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const fromSquare: Square = board.findPiece(this);

        const destSquares: Square[] = [];

        const fromRow: number = fromSquare.row;
        const fromCol: number = fromSquare.col;

        // Horizontal
        for(let i: number = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i === fromCol) continue;
            destSquares.push(Square.at(fromRow, i));
        }
        // Vertical
        for(let i: number = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i === fromRow) continue;
            destSquares.push(Square.at(i, fromCol));
        }
        // Top left
        for (let row: number = fromRow + 1, col: number = fromCol - 1; row <= 7 && col >= 0; row++, col--) {
            destSquares.push(Square.at(row, col));
        }
        // Top right
        for (let row: number = fromRow + 1, col: number = fromCol + 1; row <=7 && col <= 7; row++, col++) {
            destSquares.push(Square.at(row, col));
        }
        // Bottom left
        for (let row: number = fromRow - 1, col: number = fromCol - 1; row >= 0 && col >= 0; row--, col--) {
            destSquares.push(Square.at(row, col));
        }
        // Bottom right
        for (let row: number = fromRow - 1, col: number = fromCol + 1; row >= 0 && col <= 7; row--, col++) {
            destSquares.push(Square.at(row, col));
        }

        return destSquares;
    }
}
