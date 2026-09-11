import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from './king';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const fromSquare: Square = board.findPiece(this);

        const destSquares: Square[] = [];

        const fromRow: number = fromSquare.row;
        const fromCol: number = fromSquare.col;

        // Up
        for (let row: number = fromRow + 1; row <= 7; row++) {
            if (this.addSquareIfAvailable(board, Square.at(row, fromCol), destSquares)) break;
        }
        // Down
        for (let row: number = fromRow - 1; row >= 0; row--) {
            if (this.addSquareIfAvailable(board, Square.at(row, fromCol), destSquares)) break;
        }
        // Right
        for (let col: number = fromCol + 1; col <= 7; col++) {
            if (this.addSquareIfAvailable(board, Square.at(fromRow, col), destSquares)) break;
        }
        // Left
        for (let col: number = fromCol - 1; col >= 0; col--) {
            if (this.addSquareIfAvailable(board, Square.at(fromRow, col), destSquares)) break;
        }
        // Top left
        for (let row: number = fromRow + 1, col: number = fromCol - 1; row <= 7 && col >= 0; row++, col--) {
            if (this.addSquareIfAvailable(board, Square.at(row, col), destSquares)) break;
        }
        // Top right
        for (let row: number = fromRow + 1, col: number = fromCol + 1; row <=7 && col <= 7; row++, col++) {
            if (this.addSquareIfAvailable(board, Square.at(row, col), destSquares)) break;
        }
        // Bottom left
        for (let row: number = fromRow - 1, col: number = fromCol - 1; row >= 0 && col >= 0; row--, col--) {
            if (this.addSquareIfAvailable(board, Square.at(row, col), destSquares)) break;
        }
        // Bottom right
        for (let row: number = fromRow - 1, col: number = fromCol + 1; row >= 0 && col <= 7; row--, col++) {
            if (this.addSquareIfAvailable(board, Square.at(row, col), destSquares)) break;
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
