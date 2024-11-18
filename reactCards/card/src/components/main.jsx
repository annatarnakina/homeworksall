import SideMenu from './SideMenu';
import CardList from '../content/cardList';

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