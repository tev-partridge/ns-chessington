import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";
import King from './king';

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
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }

        // Right
        for (let c: number = col + 1; c <= 7; c++) {
            const square = Square.at(row, c);
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }

        // Down
        for (let r: number = row - 1; r >= 0; r--) {
            const square = Square.at(r, col);
            if (this.addSquareIfAvailable(board, square, destSquares)) break;
        }

        // Left
        for (let c: number = col - 1; c >= 0; c--) {
            const square = Square.at(row, c);
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
