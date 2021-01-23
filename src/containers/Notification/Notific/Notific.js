import TimePassed from './../../../components/TimePassed/TimePassed';

const Notific = ({ notific }) => {
    return (
        <div className="m-4 p-5 max-w-xl rounded-md shadow-md bg-gray-800 text-gray-400">
            <TimePassed created_at={notific.created_at} />
            <div className="mt-1">
                {notific.title}
            </div>
        </div>
    )

}

export default Notific
