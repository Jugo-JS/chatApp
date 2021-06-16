import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine 
            height='100vh'
            projectID='b466affd-d0b0-4f0e-bf8f-9e2d975c8be0'
            userName='JugoJS'
            userSecret='123123'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App