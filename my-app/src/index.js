import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Icon, Menu, Image, List, Divider, GridColumn } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
    <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?9243197903709543590' centered size='medium' />

    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu" centered>
          <Container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
                <Dropdown.Item>Aloha Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Bags & Wallets</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Sweatshirts & Jackets</Dropdown.Item>
                <Dropdown.Item>Shorts & Trunks</Dropdown.Item>
                <Dropdown.Item>Accessories</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Long Sleeve Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Bags & Wallets</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Sweatshirts</Dropdown.Item>
                <Dropdown.Item>Accessories</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Onesies</Dropdown.Item>
                <Dropdown.Item>Sweatshirts</Dropdown.Item>
                <Dropdown.Item>Accessories</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>[LIST OF BRANDS HERE]</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (

        <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?9243197903709543590' centered fluid />
    )

  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Container three column grid classname="footer">
          <GridColumn>
            <List>
              Navigation
              <Divider/>
              <List.Item>About Us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Location</List.Item>
            </List>
          </GridColumn>
          <GridColumn>
            <List>
              Main Menu
              <Divider/>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </GridColumn>
          <GridColumn>
            
          </GridColumn>
        </Container>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));