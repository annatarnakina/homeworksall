import CardList from '../content/CardList'
import SideMenu from './SideMenu';

function Main() {
    return (
    <div>
        <aside>
        <SideMenu />
        </aside>
        <div>
            <CardList />
        </div>
    </div>
    )
}

export default Main;