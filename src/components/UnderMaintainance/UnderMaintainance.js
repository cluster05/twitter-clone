import underMaintainanceLogo from './underMaintainanceLogo.svg';

const UnderMaintainance = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <p className="mb-10 text-2xl text-gray-400"> We are building this featurs. It will comming out soon. </p>
            <img src={underMaintainanceLogo} alt="" />
        </div>
    )
}

export default UnderMaintainance
