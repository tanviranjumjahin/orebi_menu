
import './App.css'
import Container from './componentes/Container'
import logo from '../src/assets/logo.png'
import Flex from './componentes/Flex'
import Image from './componentes/Image'
import Menu from './componentes/Menu'



function App() {
  

  return (
    <>
     {/* header part start */}
     <div className="bg-headerBg py-6">
      <Container className={"max-w-menuContainer py-4"}>
        <Flex >
          <div className="w-[30%]"> 
            <Image imgsrc={logo}/>
          </div>
          <div className="w-[70%] pt-4 ">
          <Flex className={"justify-center gap-x-6 "}>
            <Menu menuName={"Home"} className={'text-menuBg hover:text-menuHover'} />
            <Menu menuName={"Shop"} className={'text-menuBg hover:text-menuHover'} />
            <Menu menuName={"About"} className={'text-menuBg hover:text-menuHover'} />
            <Menu menuName={"Contacts"} className={'text-menuBg hover:text-menuHover'} />
            <Menu menuName={"Journal"} className={'text-menuBg hover:text-menuHover'} />
            
          </Flex>
          </div>
        </Flex>
      </Container>
     </div>
      {/* header part End */}

    </>
  )
}


export default App




{/* <div className="bg-headerBg py-5">
<Container>
  <Flex>
   <div className="w-[10%]">
    <Image imgsrc={logo}/>
   </div>
   <div className="w-[90%] pt-4">
    <Flex className={"justify-center gap-x-6 "}>
    <Menu menuName={"Home"} className={'font-pop font-semibold text-2xl'}/>
    <Menu menuName={"Shop"} className={'font-pop font-semibold text-2xl'}/>
    <Menu menuName={"About"} className={'font-pop font-semibold text-2xl'}/>
    <Menu menuName={"Contacts"} className={'font-pop font-semibold text-2xl'}/>
    <Menu menuName={"Journal"} className={'font-pop font-semibold text-2xl'}/>
    </Flex>
   </div>
  </Flex>
</Container>
</div> */}

