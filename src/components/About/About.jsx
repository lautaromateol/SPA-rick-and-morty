import img from './yo.jpg'

const About = () => {
    return (
        <div className='my-10 mx-auto max-w-2xl'>
            <div className='p-8 w-full h-full rounded-md shadow-lg'>
                <img src={img} className='mx-auto rounded-full h-40 w-40 border border-2 border-solid border-[rgba(64,180,202,255)] ' alt="Lautaro Leguizamon" />
                <h1 className='text-center text-3xl'>By Lautaro Mateo Leguizamon</h1>
            </div>
        </div>
    )
}

export default About