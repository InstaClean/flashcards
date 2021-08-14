import { createSlice } from '@reduxjs/toolkit'

const topicsSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        }
    }
})

// topic selector
export const { addTopic } = topicsSlice.actions
export const topicSelector = (state) => state.topics.topics

export default topicsSlice.reducer

