import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 13vh;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #49426c;
    `;


export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Oswald";
    font-size: 2rem;
    color: #ebc88b;

    div{
            width: 100px;

        }

    p{
        margin-left: 10px;
    }
    @keyframes LogoAnimation{
        0%{
            font-size: 2rem;
        }
        50%{
            font-size: 2.5rem;
        }
        100%{
            font-size: 2rem;
        }
    }

    svg{
            font-size: 2rem;
            margin-left: 20px;
            animation-name: LogoAnimation;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }

    @media screen and (max-width: 968px){
        width: 100%;
        svg{
            margin-left: 20px;
            animation-name: LogoAnimation;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }

        div{
            width: 75px;
        }
        p{
            font-size: 25px;
            margin-left: 30px;
        }
    }
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 98vh;
        position: absolute;
        top: 88px;
        left: ${({click}) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #49426c;
    }
    `;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;
    cursor: pointer;
    
    &:hover{
        background-color: #343257;
        border-bottom: 0.3rem solid #ebc08b;
        transition: 0.4s ease-in;
    }
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100px;
        position: relative;
        bottom: 100px;
        margin: 1rem 0;
        &:hover{
            border-bottom: none
        }
    }
    `;

export const MenuItemLink = styled.div`
    color: #ebc08b;
    font-size: 1.5rem;
    
    div{
        display: flex;
    }
    
    svg{
        display: none;
    }
    @media screen and (max-width: 968px){ 
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
        display: flex;

        svg{
            display: flex;
            margin-right: 1rem;
            text-align: center;
        }
        div{
            width: auto;
            height: 100%;
            align-items: center;
        }
    }
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: flex;
        color: #ebebeb;
        font-size: 2rem;
        padding-right: 15px;
    }
`;