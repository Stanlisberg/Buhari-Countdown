import { FcGoogle } from 'react-icons/fc'

function Google () {
    return(
        <div 
        className='google'
        style={{
            position: 'absolute',
            right: '1px',
            color: 'fff',
            cursor: 'pointer'
        }}><a href='http://www.google.com' target= '_blank'><FcGoogle size={30}/></a></div>
    )
}
export default Google;