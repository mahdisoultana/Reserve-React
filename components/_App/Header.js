import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart=()=>NProgress.start();
Router.onRouteChangeComplete=()=>NProgress.done();
Router.onRouteChangeError=()=>NProgress.done();

function Header() {
  const user = false;
  return (
    <Menu fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            Reserve-React
          </Menu.Item>
        </Link>
        <Link href="/cart">
          <Menu.Item header>
            <Icon
              name="cart"
              size="large"
            />
            Cart
          </Menu.Item>
        </Link>
        {user && <Link href="/create">
          <Menu.Item header>
            <Icon
              name="add square"
              size="large"
            />
            Create
          </Menu.Item>
        </Link>}
        {user ? (<>
          <Link href="/account">
            <Menu.Item header>
              <Icon
                name="user"
                size="large"
              />
           Account
          </Menu.Item>
          </Link>
          <Menu.Item header>
            <Icon
              name="signout"
              size="large"
            />
            Logout
          </Menu.Item>
        </>) : (<>
          <Link href="/signin">
            <Menu.Item header>
              <Icon
                name="sign in"
                size="large"
              />
        LogIn
        </Menu.Item>
          </Link>

          <Link href="/signup">
            <Menu.Item header>
              <Icon
                name="signup"
                size="large"
              />
        SignUp
        </Menu.Item>
          </Link>
        </>)}
      </Container>
    </Menu>
  )
}

export default Header;