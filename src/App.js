import LinkButtons from './components/LinkButtons';
import Profile from './components/Profile';
import db from './db'

function App() {

  return (
    <div 
        style={{backgroundImage: `url(${db.bgSrc})`}} 
        className='bg-cover flex flex-col items-center py-6 px-4 bg-gradient-to-r from-sky-500 to-indigo-500 h-screen'>
        <Profile 
            imgSrc={db.imgSrc}
            handle={db.name}
        />
        {db.links.map(link => (
            <LinkButtons name={link.name} href={link.href} />
        ))}

        <div className='mt-6 text-xs text-gray-300'>Powered by <a href="https://github.com/kev-inc/custom-linktree" className='underline'>custom-linktree</a></div>
    </div>
  );
}

export default App;
