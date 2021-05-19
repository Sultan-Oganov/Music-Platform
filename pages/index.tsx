import { Button } from '@material-ui/core'
import Navbar from '../components/Navbar'
import MainLayout from '../layouts/MainLayout'
const Index = () => {
    return (
        <MainLayout>
            <div className="center">
                <h1>Добро пожаловать</h1>
                <h3>Здесь собраны самые лучшие треки!</h3>
                <Button>КНОПКА</Button>
            </div>

            <style jsx>
                {`
                    .center{
                        margin: 150px auto 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;  
                    }
                `}
            </style>
        </MainLayout>
    )
}

export default Index