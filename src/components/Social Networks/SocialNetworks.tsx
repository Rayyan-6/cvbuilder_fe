import GeneralComponent from "../Resume Component/GeneralComponent"

function SocialNetworks(){
    return <div className="pt-5 mr-5">
        <GeneralComponent title="Social Network"
        subSections={
            [
                {
                    iconDesc: 'usernamehere',
                    icon: 'IC'
                },
                {
                    iconDesc: 'usernamehere',
                    icon: 'IC'
                },
            ]
        }/>
    </div>
}

export default SocialNetworks
