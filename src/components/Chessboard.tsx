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

// black pawns
for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_b.png', x: i, y: 6 })
}

// white pawns
for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_w.png', x: i, y: 1 })
}

// do one loop for all black pieces, then for second
for (let i = 0; i < 2; i++) {
    // first iteration will be black, second will be white
    const color = (i === 0) ? 'b' : 'w'
    // black is 7, white is 0
    const y = (i === 0) ? 7 : 0
    pieces.push({ image: `images/rook_${color}.png`, x: 0, y: y });
    pieces.push({ image: `images/rook_${color}.png`, x: 7, y: y });
    pieces.push({ image: `images/knight_${color}.png`, x: 1, y: y });
    pieces.push({ image: `images/knight_${color}.png`, x: 6, y: y });
    pieces.push({ image: `images/bishop_${color}.png`, x: 2, y: y });
    pieces.push({ image: `images/bishop_${color}.png`, x: 5, y: y });
    pieces.push({ image: `images/queen_${color}.png`, x: 3, y: y });
    pieces.push({ image: `images/king_${color}.png`, x: 4, y: y });
}



pieces.push({ image: `images/rook_w.png`, x: 0, y: 0 });
pieces.push({ image: `images/rook_w.png`, x: 7, y: 0 });
pieces.push({ image: `images/knight_w.png`, x: 1, y: 0 });
pieces.push({ image: `images/knight_w.png`, x: 6, y: 0 });
pieces.push({ image: `images/bishop_w.png`, x: 2, y: 0 });
pieces.push({ image: `images/bishop_w.png`, x: 5, y: 0 });
pieces.push({ image: `images/queen_w.png`, x: 3, y: 0 });
pieces.push({ image: `images/king_w.png`, x: 4, y: 0 });

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
