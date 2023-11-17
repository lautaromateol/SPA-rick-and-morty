import img from './yo.jpg'

const About = () => {
    return (
        <div className='my-10 mx-auto max-w-2xl'>
            <div className='p-8 w-full h-full rounded-md shadow-lg'>
                <img src={img} className='mx-auto rounded-full h-40 w-40 border border-2 border-solid border-[rgba(64,180,202,255)] ' alt="Lautaro Leguizamon" />
                <h1 className='text-center text-3xl'>By Lautaro Mateo Leguizamon</h1>
                <div className='flex flex-col my-5'>
                <a target='_blank' href="https://www.linkedin.com/in/lautaro-mateo-leguizamon-35b902279/" className='underline my-1'>Connect with me at LinkedIn</a>
                <a href="" className='underline my-1'>Visit my portfolio</a>
                </div>
            </div>
        </div>
    )
}

export default About