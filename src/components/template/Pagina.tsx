import { IconArrowDown, IconArrowUp, IconCircuitPushbutton, IconHome, IconMailDollar, IconSquare1, IconSquare2, IconSquare3, IconUsers } from "@tabler/icons-react";
import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Rodape from "./Rodape";
import MenuLabel from "./MenuLabel";

export interface PaginaProps {
    children: any;
}

export default function Pagina(props: PaginaProps){
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho />
                <div className="flex flex-1 ">
                    <AreaLateral > 
                        <Menu>
                            <MenuLabel>Components</MenuLabel>
                                <MenuItem 
                                    link="/"
                                    icon={IconHome}
                                    text="home"/>
                                
                                <MenuItem
                                    link="/basic/first"
                                    icon={IconSquare1}
                                    text="Primeiro Exercicio"/>
                                
                                <MenuItem 
                                    link="/basic/jsx"
                                    icon={IconSquare2}
                                    text="Segundo Exercicio"/>
                                
                                <MenuItem 
                                    link="/basic/comp-02"
                                    icon={IconSquare3}
                                    text="Terceiro Exercicio"/>
                            
                            <MenuLabel>Arvore de Componentes</MenuLabel>
                                <MenuItem 
                                    link="/arvore/direta"
                                    icon={IconArrowDown}
                                    text="Comunicação Direta"/>
                                
                                <MenuItem 
                                    link="/basic/botao"
                                    icon={IconCircuitPushbutton}
                                    text="Usando Botão"/>
                            
                                <MenuItem 
                                    link="/arvore/indireta"
                                    icon={IconArrowUp}
                                    text="Comunicação Indireta"/>
                                
                                <MenuItem 
                                    link="/arvore/crud"
                                    icon={IconUsers}
                                    text="Cadastro de Usuários"/>

                            <MenuLabel>Gerenciamento de Estado</MenuLabel>
                                <MenuItem 
                                    link="/estado/basico-01"
                                    icon={IconMailDollar }
                                    text="Usando Estado"/>

                        </Menu>
                    </AreaLateral>
                    <main className="p-6 flex-1">{props.children}</main>
                </div>
            <Rodape />
        </div>    
    )
}      