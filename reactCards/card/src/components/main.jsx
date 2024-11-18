import React from 'react';
import SideMenu from './SideMenu';
import CardList from './CardList';

function Main() {
    return (
    <React.Fragment>
        <aside>
            <SideMenu />
        </aside>
        <div>
            <CardList />
        </div>
    </React.Fragment>
    )
}

export default Main;