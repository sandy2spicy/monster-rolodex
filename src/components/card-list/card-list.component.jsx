import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props) => {
    return <div className="card-list">
    {
        props.monsters.map((monster, index, _) => {
         return <Card key={monster.id} monster={monster}/>
        })
    }
    </div>
}