import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import King from './king';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        const fromSquare: Square = board.findPiece(this);

        const destSquares: Square[] = [];

        const fromRow: number = fromSquare.row;
        const fromCol: number = fromSquare.col;

        // Top left
        for (let row: number = fromRow + 1, col: number = fromCol - 1; row <= 7 && col >= 0; row++, col--) {
            const square = Square.at(row, col);
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }
        // Top right
        for (let row: number = fromRow + 1, col: number = fromCol + 1; row <=7 && col <= 7; row++, col++) {
            const square = Square.at(row, col);
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }
        // Bottom left
        for (let row: number = fromRow - 1, col: number = fromCol - 1; row >= 0 && col >= 0; row--, col--) {
            const square = Square.at(row, col);
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }
        // Bottom right
        for (let row: number = fromRow - 1, col: number = fromCol + 1; row >= 0 && col <= 7; row--, col++) {
            const square = Square.at(row, col);
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }

        return destSquares;
    }

    private addSquareIfAvailable(board: Board, square: Square, destSquares: Square[]): boolean {
        const piece = board.getPiece(square);
        if (piece === undefined) {
            destSquares.push(square);
            return false;
        }
        if (piece.player !== this.player && !(piece instanceof King)) {
            destSquares.push(square);
        }
        return true;
    }
}
