const Profile = ({imgSrc, handle}) => (
    <div className='mt-3 mb-8'>
        <img class="object-cover w-24 h-24 rounded-full mb-4" src={imgSrc} alt="Rounded avatar" />
        <div className='text-center font-semibold text-white'>{handle}</div>
    </div>
)

export default Profile