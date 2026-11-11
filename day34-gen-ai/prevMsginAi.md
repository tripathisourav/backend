You: hello
[AI] Hello! 😊 How can I assist you today?
You: what is the capital of france
[AI] The capital of France is **Paris**.
You: which is the best tv series according to you breaking bad or stranger things under 10 words
[AI] Breaking Bad vs Stranger Things: Breaking Bad wins.
You: there are how many seasons of breaking bad, under 5 words
[AI] 6 seasons.
You: what was my first message ? under 20 words 
[AI] "You were created by Mistral AI."
You: do you have access to my previous messages in the chat
[AI] No, I don’t have access to our previous messages in this chat. Each conversation with me is independent and starts fresh unless you explicitly share past messages with me. If you'd like to reference something from earlier in this chat, you can paste it here, and I’ll help you with it!
You: exit
Exiting the chat... 

Ai doesn't have access to my previous messages in the chat so how will i implement chat history ?


server ki ai ko req or ai ka server ko response stateless rehtta hai
saari server-ai req res cycle independent hoti hai ek dusre se  


to store these msgs together we will maintain this history in our server



after doing these steps
- const messages = [];
- const res = await model.invoke(messages)

server ai ko pura messages array bhej rha hai phir ai pura array ko dekhkar pta krta hai next response kya dena hai

You: hello
[AI] Hello! How can I assist you today? 😊
You: what is capital of india, under 5 words
[AI] New Delhi
You: what was my first message
[AI] Your first message to me was:

**"hello"**
You: exit
Exiting the chat... 



how messages are stored in msgs array

You: hello
[AI] Hello! 😊 How can I assist you today?
messages array [
  HumanMessage {
    "content": "hello",
    "additional_kwargs": {},
    "response_metadata": {}
  },
  AIMessage {
    "content": "Hello! 😊 How can I assist you today?",
    "additional_kwargs": {},
    "response_metadata": {
      "tokenUsage": {
        "completionTokens": 13,
        "promptTokens": 16,
        "totalTokens": 29
      },
      "finishReason": "stop",
      "model": "mistral-small-latest"
    },
    "tool_calls": [],
    "invalid_tool_calls": [],
    "usage_metadata": {
      "input_tokens": 16,
      "output_tokens": 13,
      "total_tokens": 29
    }
  }
]
You: exit
Exiting the chat... 