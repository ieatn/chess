import './Chessboard.css'
import Tile from './Tile'

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


interface Piece {
    image: string
    x: number
    y: number
}
const pieces: Piece[] = []

for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_b.png', x: i, y: 6 })
}

export default function Chessboard() {
    let board = [];
  
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j + i + 2;
            let image = undefined;

            pieces.forEach((p) => {
                if (p.x === i && p.y === j) {
                image = p.image;
                }
            });

            board.push(<Tile image={image} number={number} />);
        }
    }
    
    return (
        <div className='chessboard'>{board}</div>
    )
}
