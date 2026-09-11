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

        // Up
        for (let r: number = row + 1; r <= 7; r++) {
            const square = Square.at(r, col);
            const piece = board.getPiece(square);
            if (piece !== undefined) {
                break;
            }
            destSquares.push(square);
        }

        // Right
        for (let c: number = col + 1; c <= 7; c++) {
            const square = Square.at(row, c);
            const piece = board.getPiece(square);
            if (piece !== undefined) {
                break;
            }
            destSquares.push(square);
        }

        // Down
        for (let r: number = row - 1; r >= 0; r--) {
            const square = Square.at(r, col);
            const piece = board.getPiece(square);
            if (piece !== undefined) {
                break;
            }
            destSquares.push(square);
        }

        // Left
        for (let c: number = col - 1; c >= 0; c--) {
            const square = Square.at(row, c);
            const piece = board.getPiece(square);
            if (piece !== undefined) {
                break;
            }
            destSquares.push(square);
        }

        return destSquares;
    }
}
