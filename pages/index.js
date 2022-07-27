import Head from 'next/head'
import Logo from '../public/ops_0000_Objeto-inteligente-vectorial.png';
import Imagen from '../public/ops_0001_Objeto-inteligente-vectorial.png';
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>RENDEZ-VOUS</title>
        <meta name="description" content="La Revista" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-fondorv z-0 h-[100vh] w-auto flex justify-center items-center'>
        <section className='bg-white font-ubuntu z-0 items-center xl:pt-[3%] xl:pb-[3%] xl:pl-[10%] xl:pr-[10%] flex flex-col shadow-lg xl:w-[70vw] justify-center sm:w-[50vw] sm:h-[65vh] sm:pt-0 sm:pb-0 sm:pr-4 sm:pl-4 ssm:h-[45vh] ssm:w-[95vw]'>
          <div className='flex flex-row'>
            <div className=''>
              <img src={Logo.src} className='xl:w-[50%] m-auto sm:w-[30%] ssm:w-[30%]' />
              <div className='flex flex-col text-center'>
                <span className='ssm:text-[1rem] xl:text-[4.5rem] sm:text-[2.5rem]'>¡Oops!</span>
                <span className='xl:text-[1.3rem] sm:text-[0.9rem]'>En mantenimiento</span>
              </div>
            </div>
            <div className='xl:w-[75%] sm:w-[100%] ssm:w-[75%]'>
              <img src={Imagen.src} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
