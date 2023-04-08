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
pieces.push({ image:'images/pawn_b.png', x: 0, y: 1 })

export default function Chessboard() {

    let board = []
    for (let i = 0; i < horizontalAxis.length; i++) {
        for (let j  = 0; j < verticalAxis.length; j++) {
            
            const number = j + i + 2
            // console.log(i, j)
            // if (i == 0 && j == 1) {

            //     board.push(<Tile number={number} image={pieces[0].image} />)
            // }
            board.push(<Tile number={number} image={pieces[0].image} />)
        }
    }
    
    return (
        <div className='chessboard'>{board}</div>
    )
}
