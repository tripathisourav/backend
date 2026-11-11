langchain is responsible for better communication between server and ai service provider 

You: hello
[AI] Hello! 😊 How can I assist you today? 🚀
You: what is the capital of japan
[AI] The capital of Japan is **Tokyo**. 🇯🇵
You: send an email to xyz@test.com topic is iran war and compose the rest of the body by yourself
[AI] Here’s a professional yet concise email draft for you:

---

**Subject:** Iran War – Key Developments and Geopolitical Implications

**To:** xyz@test.com

Dear [Recipient's Name],

I hope this email finds you well. I’m reaching out to discuss the recent escalations in the Iran conflict and its broader impact on regional stability.

Recent developments—including drone strikes, cyberattacks, and proxy engagements—have heightened tensions, raising concerns about humanitarian crises and economic disruptions. How do you assess the long-term risks, particularly concerning oil supply chains or nuclear non-proliferation?

I’d appreciate your insights on potential diplomatic resolutions or the role of international actors in de-escalation.

Looking forward to your thoughts.

Best regards,
[Your Full Name]
[Your Position/Organization, if applicable]
[Your Contact Information]

---
You: exit
Exiting the chat... 


you can't do actions like sending email directly 

ai doesn't have that much power so we need something else we need ai tools for doing complex action tasks




- Email transporter is ready to send emails
You: hello
{
  messages: [
    HumanMessage {
      "id": "1989d1b7-bea6-4d34-a3c8-2bae6a6f6762",
      "content": "hello",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    AIMessageChunk {
      "id": "2b44b1c7-8711-4b3e-98ac-b69a72a9ba9f",
      "content": "Hello! How can I assist you today?",
      "name": "model",
      "additional_kwargs": {},
      "response_metadata": {
        "estimatedTokenUsage": {},
        "prompt": 0,
        "completion": 0,
        "model": "mistral-small-latest",
        "finishReason": "stop"
      },
      "tool_calls": [],
      "tool_call_chunks": [],
      "invalid_tool_calls": [],
      "usage_metadata": {
        "input_tokens": 160,
        "output_tokens": 10,
        "total_tokens": 170,
        "input_token_details": {},
        "output_token_details": {}
      }
    }
  ]
}
You: exit
Exiting the chat... 







- You: Email transporter is ready to send emails
hello
{
  messages: [
    HumanMessage {
      "id": "ce4743e4-676e-4e52-bf57-d8f0369f0ea8",
      "content": "hello",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    AIMessageChunk {
      "id": "b37b1b22-6533-4cf0-a6b3-11cfd41a2f20",
      "content": "Hello! How can I assist you today? 😊",
      "name": "model",
      "additional_kwargs": {},
      "response_metadata": {
        "estimatedTokenUsage": {},
        "prompt": 0,
        "completion": 0,
        "model": "mistral-small-latest",
        "finishReason": "stop"
      },
      "tool_calls": [],
      "tool_call_chunks": [],
      "invalid_tool_calls": [],
      "usage_metadata": {
        "input_tokens": 160,
        "output_tokens": 13,
        "total_tokens": 173,
        "input_token_details": {},
        "output_token_details": {}
      }
    }
  ]
}
You: send an email to sourabh12abh@gmail.com about the role of UN in global peace, body:- compose body by your self it contains the big steps taken by UN. 
Email sent: {
  accepted: [ 'sourabh12abh@gmail.com' ],
  rejected: [],
  ehlo: [
    'SIZE 35882577',
    '8BITMIME',
    'AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH',
    'ENHANCEDSTATUSCODES',
    'PIPELINING',
    'CHUNKING',
    'SMTPUTF8'
  ],
  envelopeTime: 913,
  messageTime: 835,
  messageSize: 5634,
  response: '250 2.0.0 OK  1780389654 d9443c01a7336-2bf239fd6edsm157610555ad.18 - gsmtp',
  envelope: { from: 'sourabh12abh@gmail.com', to: [ 'sourabh12abh@gmail.com' ] },
  messageId: '<47e4f6b7-4a97-9472-5ea1-27aad0c9361c@gmail.com>'
}
{
  messages: [
    HumanMessage {
      "id": "ce4743e4-676e-4e52-bf57-d8f0369f0ea8",
      "content": "hello",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    HumanMessage {
      "id": "97658b19-25bb-4997-97bc-36b1ee4e68e0",
      "content": "Hello! How can I assist you today? 😊",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    HumanMessage {
      "id": "46d9b078-98ce-4201-ac8e-f100d0c6a247",
      "content": "send an email to sourabh12abh@gmail.com about the role of UN in global peace, body:- compose body by your self it contains the big steps taken by UN. ",
      "additional_kwargs": {},
      "response_metadata": {}
    },
    AIMessageChunk {
      "id": "dee097b2-4d30-426d-b14d-1b054d5f447b",
      "content": "",
      "name": "model",
      "additional_kwargs": {},
      "response_metadata": {
        "estimatedTokenUsage": {},
        "prompt": 0,
        "completion": 0,
        "model": "mistral-small-latest",
        "finishReason": "tool_calls"
      },
      "tool_calls": [
        {
          "name": "emailTool",
          "args": {
            "to": "sourabh12abh@gmail.com",
            "subject": "Role of the United Nations in Global Peace: Key Steps and Initiatives",
            "html": "<h2>Role of the United Nations in Global Peace: Key Steps and Initiatives</h2>\n\n<p>Dear Sourabh,</p>\n\n<p>The United Nations (UN) has played a pivotal role in promoting global peace, security, and cooperation since its inception in 1945. Over the decades, the UN has undertaken numerous initiatives and actions to prevent conflicts, mediate disputes, and foster sustainable peace worldwide. Below are some of the most significant steps taken by the UN to uphold global peace:</p>\n\n\n<h3>1. Peacekeeping Missions</h3>\n<ul>\n<li><strong>Establishment of UN Peacekeeping:</strong> Since 1948, the UN has deployed peacekeeping forces to conflict zones worldwide. These missions aim to stabilize areas, protect civilians, and support the implementation of peace agreements. Notable examples include UNPROFOR in the former Yugoslavia and MONUSCO in the Democratic Republic of the Congo.</li>\n\n<li><strong>Blue Helmets:</strong> Over 1 million peacekeepers from more than 120 countries have served under the UN flag, earning the nickname \"Blue Helmets.\" They have helped reduce violence, facilitate dialogue, and support post-conflict reconstruction.</li>\n</ul>\n\n<h3>2. Conflict Prevention and Mediation</h3>\n<ul>\n<li><strong>UN Mediation and Good Offices:</strong> The UN Secretary-General and special envoys have mediated countless conflicts, including the Iran-Iraq War (1988), the Namibian independence process (1990), and the Good Friday Agreement in Northern Ireland (1998).</li>\n\n<li><strong>Preventive Diplomacy:</strong> The UN works proactively to prevent disputes from escalating into conflicts through early warning systems, confidence-building measures, and fostering dialogue among nations.</li>\n</ul>\n\n<h3>3. Disarmament and Arms Control</h3>\n<ul>\n<li><strong>Nuclear Disarmament:</strong> The UN has been instrumental in advancing nuclear disarmament through treaties like the <strong>Nuclear Non-Proliferation Treaty (NPT, 1968)</strong> and the <strong>Treaty on the Prohibition of Nuclear Weapons (2017)</strong>.</li>\n\n<li><strong>Conventional Arms Control:</strong> The UN has promoted global arms control agreements, such as the <strong>Arms Trade Treaty (2014)</strong>, to regulate the international trade of conventional weapons and reduce illicit arms flows.</li>\n</ul>\n\n<h3>4. Human Rights and Humanitarian Assistance</h3>\n<ul>\n<li><strong>Universal Declaration of Human Rights (UDHR, 1948):</strong> The UN adopted this landmark document to promote and protect human rights globally, setting a common standard for all nations.</li>\n\n<li><strong>Humanitarian Aid:</strong> The UN, through agencies like UNHCR (for refugees), UNICEF (for children), and WFP (for food assistance), provides critical aid to millions affected by conflicts, natural disasters, and poverty.</li>\n</ul>\n\n<h3>5. Sustainable Development and Peacebuilding</h3>\n<ul>\n<li><strong>Sustainable Development Goals (SDGs):</strong> Adopted in 2015, the SDGs address root causes of conflict, such as poverty, inequality, and lack of access to education and healthcare. Goal 16 specifically aims to promote peaceful and inclusive societies.</li>\n\n<li><strong>Peacebuilding Commission:</strong> Established in 2005, this UN body supports post-conflict countries in transitioning to sustainable peace by coordinating reconstruction, governance, and development efforts.</li>\n</ul>\n\n<h3>6. Climate Security and Peace</h3>\n<ul>\n<li><strong>Recognizing Climate Change as a Threat Multiplier:</strong> The UN has highlighted how climate change exacerbates conflicts by increasing resource scarcity, displacement, and competition. Initiatives like the <strong>UN Climate Security Mechanism</strong> address these challenges.</li>\n\n<li><strong>Environmental Peacebuilding:</strong> Programs like the UN Environment Programme (UNEP) work to restore ecosystems in post-conflict areas, reducing tensions over resources like water and arable land.</li>\n</ul>\n\n<h3>7. International Law and Justice</h3>\n<ul>\n<li><strong>International Court of Justice (ICJ):</strong> The UN's judicial organ settles legal disputes between states and provides advisory opinions on international law.</li>\n\n<li><strong>International Criminal Court (ICC):</strong> While independent, the ICC works closely with the UN to prosecute individuals for war crimes, crimes against humanity, and genocide, ensuring accountability for atrocities.</li>\n</ul>\n\n\n<h3>A Shared Responsibility</h3>\n<p>The United Nations remains a beacon of hope for millions affected by conflicts and injustices. While challenges persist, the UN's efforts—rooted in diplomacy, human rights, and collective action—continue to shape a more peaceful and just world. Its work reminds us that global peace is not merely the absence of war but the presence of justice, equity, and cooperation among nations.</p>\n\n<p>Thank you for your interest in this critical topic. If you'd like to explore any specific UN initiative or region further, feel free to ask!</p>\n\n<p>Best regards,<br>\n<i>Your Assistant</i></p>"
          },
          "id": "ENYwojP8s",
          "type": "tool_call"
        }
      ],
      "tool_call_chunks": [
        {
          "name": "emailTool",
          "args": "{\"to\": \"sourabh12abh@gmail.com\", \"subject\": \"Role of the United Nations in Global Peace: Key Steps and Initiatives\", \"html\": \"<h2>Role of the United Nations in Global Peace: Key Steps and Initiatives</h2>\\n\\n<p>Dear Sourabh,</p>\\n\\n<p>The United Nations (UN) has played a pivotal role in promoting global peace, security, and cooperation since its inception in 1945. Over the decades, the UN has undertaken numerous initiatives and actions to prevent conflicts, mediate disputes, and foster sustainable peace worldwide. Below are some of the most significant steps taken by the UN to uphold global peace:</p>\\n\\n\\n<h3>1. Peacekeeping Missions</h3>\\n<ul>\\n<li><strong>Establishment of UN Peacekeeping:</strong> Since 1948, the UN has deployed peacekeeping forces to conflict zones worldwide. These missions aim to stabilize areas, protect civilians, and support the implementation of peace agreements. Notable examples include UNPROFOR in the former Yugoslavia and MONUSCO in the Democratic Republic of the Congo.</li>\\n\\n<li><strong>Blue Helmets:</strong> Over 1 million peacekeepers from more than 120 countries have served under the UN flag, earning the nickname \\\"Blue Helmets.\\\" They have helped reduce violence, facilitate dialogue, and support post-conflict reconstruction.</li>\\n</ul>\\n\\n<h3>2. Conflict Prevention and Mediation</h3>\\n<ul>\\n<li><strong>UN Mediation and Good Offices:</strong> The UN Secretary-General and special envoys have mediated countless conflicts, including the Iran-Iraq War (1988), the Namibian independence process (1990), and the Good Friday Agreement in Northern Ireland (1998).</li>\\n\\n<li><strong>Preventive Diplomacy:</strong> The UN works proactively to prevent disputes from escalating into conflicts through early warning systems, confidence-building measures, and fostering dialogue among nations.</li>\\n</ul>\\n\\n<h3>3. Disarmament and Arms Control</h3>\\n<ul>\\n<li><strong>Nuclear Disarmament:</strong> The UN has been instrumental in advancing nuclear disarmament through treaties like the <strong>Nuclear Non-Proliferation Treaty (NPT, 1968)</strong> and the <strong>Treaty on the Prohibition of Nuclear Weapons (2017)</strong>.</li>\\n\\n<li><strong>Conventional Arms Control:</strong> The UN has promoted global arms control agreements, such as the <strong>Arms Trade Treaty (2014)</strong>, to regulate the international trade of conventional weapons and reduce illicit arms flows.</li>\\n</ul>\\n\\n<h3>4. Human Rights and Humanitarian Assistance</h3>\\n<ul>\\n<li><strong>Universal Declaration of Human Rights (UDHR, 1948):</strong> The UN adopted this landmark document to promote and protect human rights globally, setting a common standard for all nations.</li>\\n\\n<li><strong>Humanitarian Aid:</strong> The UN, through agencies like UNHCR (for refugees), UNICEF (for children), and WFP (for food assistance), provides critical aid to millions affected by conflicts, natural disasters, and poverty.</li>\\n</ul>\\n\\n<h3>5. Sustainable Development and Peacebuilding</h3>\\n<ul>\\n<li><strong>Sustainable Development Goals (SDGs):</strong> Adopted in 2015, the SDGs address root causes of conflict, such as poverty, inequality, and lack of access to education and healthcare. Goal 16 specifically aims to promote peaceful and inclusive societies.</li>\\n\\n<li><strong>Peacebuilding Commission:</strong> Established in 2005, this UN body supports post-conflict countries in transitioning to sustainable peace by coordinating reconstruction, governance, and development efforts.</li>\\n</ul>\\n\\n<h3>6. Climate Security and Peace</h3>\\n<ul>\\n<li><strong>Recognizing Climate Change as a Threat Multiplier:</strong> The UN has highlighted how climate change exacerbates conflicts by increasing resource scarcity, displacement, and competition. Initiatives like the <strong>UN Climate Security Mechanism</strong> address these challenges.</li>\\n\\n<li><strong>Environmental Peacebuilding:</strong> Programs like the UN Environment Programme (UNEP) work to restore ecosystems in post-conflict areas, reducing tensions over resources like water and arable land.</li>\\n</ul>\\n\\n<h3>7. International Law and Justice</h3>\\n<ul>\\n<li><strong>International Court of Justice (ICJ):</strong> The UN's judicial organ settles legal disputes between states and provides advisory opinions on international law.</li>\\n\\n<li><strong>International Criminal Court (ICC):</strong> While independent, the ICC works closely with the UN to prosecute individuals for war crimes, crimes against humanity, and genocide, ensuring accountability for atrocities.</li>\\n</ul>\\n\\n\\n<h3>A Shared Responsibility</h3>\\n<p>The United Nations remains a beacon of hope for millions affected by conflicts and injustices. While challenges persist, the UN's efforts—rooted in diplomacy, human rights, and collective action—continue to shape a more peaceful and just world. Its work reminds us that global peace is not merely the absence of war but the presence of justice, equity, and cooperation among nations.</p>\\n\\n<p>Thank you for your interest in this critical topic. If you'd like to explore any specific UN initiative or region further, feel free to ask!</p>\\n\\n<p>Best regards,<br>\\n<i>Your Assistant</i></p>\"}",
          "id": "ENYwojP8s",
          "index": 0,
          "type": "tool_call_chunk"
        }
      ],
      "invalid_tool_calls": [],
      "usage_metadata": {
        "input_tokens": 213,
        "output_tokens": 1256,
        "total_tokens": 1469
      }
    },
    ToolMessage {
      "id": "afa18e55-5d53-4d37-a4a3-c17296c848bc",
      "content": "email sent successfully",
      "name": "emailTool",
      "additional_kwargs": {},
      "response_metadata": {},
      "tool_call_id": "ENYwojP8s"
    },
    AIMessageChunk {
      "id": "9ea9b4ef-4828-459d-8b48-f663e9ac2703",
      "content": "The email has been successfully sent to **sourabh12abh@gmail.com** with the subject **\"Role of the United Nations in Global Peace: Key Steps and Initiatives\"**. The email includes a detailed body covering the major steps and initiatives taken by the UN to promote global peace.",
      "name": "model",
      "additional_kwargs": {},
      "response_metadata": {
        "estimatedTokenUsage": {},
        "prompt": 0,
        "completion": 0,
        "model": "mistral-small-latest",
        "finishReason": "stop"
      },
      "tool_calls": [],
      "tool_call_chunks": [],
      "invalid_tool_calls": [],
      "usage_metadata": {
        "input_tokens": 1474,
        "output_tokens": 61,
        "total_tokens": 1535,
        "input_token_details": {},
        "output_token_details": {}
      }
    }
  ]
}
You: exit
Exiting the chat... 



Ai doesn't call tool directly by itself it just tells tools we need to do stuff

tool is called with the help of langchain
and createAgent method - llm kbhi bhi tool ko directly call nhi kr skta

agar hmne ai ko ek aisa command de diya jiske liye tool necessary ho or hmne uske liye koi tool bnaya nhi toh ai use krne se mna krdega 