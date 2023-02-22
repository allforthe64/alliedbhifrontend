const PatientCard = ({fName, lName, DOB, gender}) => {
    return (
        <div className="bg-white shadow-md mb-px py-2 border-b border-grey">
            <div className="flex ml-4">
                <p className="font-medium text-lg">{fName}</p>
                <p className="ml-2 font-medium text-lg">{lName}</p>
            </div>
            <div className="ml-8 flex">
                <p className="font-medium text-sm">DOB: {DOB}</p>
                <p className="font-medium text-sm ml-2">Gender: {gender}</p>
            </div>
        </div>
    )
}

export default PatientCard
