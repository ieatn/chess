import { useRef } from 'react'
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





export default function Chessboard() {

    const chessboardRef = useRef<HTMLDivElement>(null)

    let activePiece: HTMLElement | null = null

    // move functions down so ref can access
    const grabPiece = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement
        if (element.classList.contains('chess-piece')) {
            console.log(e)
            const x = e.clientX - 50
            const y = e.clientY - 50
            element.style.position = 'absolute'
            element.style.left = `${x}px`
            element.style.top = `${y}px`
            activePiece = element
        }
    }

    const movePiece = (e: React.MouseEvent) => {
        const chessboard = chessboardRef.current
        if (activePiece && chessboard) {
            // constrain clicks within chessboard size
            const minX = chessboard.offsetLeft - 25;
            const minY = chessboard.offsetTop - 25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
            const x = e.clientX - 50
            const y = e.clientY - 50
            activePiece.style.position = 'absolute'
            
            //If x is smaller than minimum amount
            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            }
            //If x is bigger than maximum amount
            else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            }
            //If x is in the constraints
            else {
                activePiece.style.left = `${x}px`;
            }

            //If y is smaller than minimum amount
            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            }
            //If y is bigger than maximum amount
            else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            }
            //If y is in the constraints
            else {
                activePiece.style.top = `${y}px`;
            }
        }
    }

    const dropPiece = (e: React.MouseEvent) => {
        if (activePiece) {
            activePiece = null
        }
    }
    

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

            board.push(<Tile image={image} number={number} key={`${j}, ${i}`} />);
        }
    }
    
    return (
        <div 
            onMouseDown={(e) => grabPiece(e)} 
            onMouseMove={(e) => movePiece(e)} 
            onMouseUp={(e) => dropPiece(e)}
            className='chessboard'
            ref={chessboardRef}
        >
            {board}
        </div>
    )
}
