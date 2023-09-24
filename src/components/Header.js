import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/tunein.png" alt=""></img>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <SearchIcon>
                        <img  src="images/search-icon.svg" alt=""/>
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList>
                            <a>
                                <img src="/images/nav-hoem.svg" alt="" />
                            </a>
                        </NavList>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;

`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
    img {
        max-width: 50px;
        max-height: 50px;
        border-radius: 28px;
    }
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div {
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 2;
            font-weight: 400;
            font-size: 16px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 15px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    //justify-content: center;
    align-items: center;
`;

const Nav =  styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        postion: fixed;
        left:0;
        bottom:0;
        background:white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
`;

const NavList = styled.li`
    display: flex;
    align-items:center;
    a {
        align-items: center;
    }
`;

export default Header;