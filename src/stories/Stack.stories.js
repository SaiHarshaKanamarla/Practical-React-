import Stack from "../components/ForStoryBook/Stack";


export default {
    title: "Stack",
    component: Stack,
    argTypes: {
        numOfChildren: { type: "number", defaultValue: 4 }
    }
}

const Template = ({ numOfChildren, ...args }) => (

    <Stack {...args} >
        {[...Array(numOfChildren).keys()].map(n => (
            <div style={{
                width: "50px", height: "50px", backgroundColor: "red", display: "flex",
                justifyContent: "center", alignItems: "center"
            }}>{n + 1}</div>
        ))}
    </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
}
