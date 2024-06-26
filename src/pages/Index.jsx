import React, { useState } from "react";
import { Container, VStack, Input, Button, Image, Text, Box, Grid } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const exampleImages = [
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2ODk3NzQwNzA&ixlib=rb-1.2.1&q=80&w=400",
];

const Index = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSendQuestion = async () => {
    if (selectedImage && question) {
      try {
        const response = await fetch("https://freider-kive-demo--sglang-inference-web-api.modal.run", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image_url: selectedImage, question }),
        });
        const data = await response.json();
        setAnswer(data.answer);
      } catch (error) {
        console.error("Error fetching the answer:", error);
      }
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Chat with an Image</Text>
        <Text>Select an image and ask a question about it.</Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          {exampleImages.map((url, index) => (
            <Box key={index} onClick={() => handleImageClick(url)} cursor="pointer">
              <Image src={url} alt={`Example ${index + 1}`} boxSize="100px" objectFit="cover" border={selectedImage === url ? "2px solid blue" : "none"} />
            </Box>
          ))}
        </Grid>
        <Input placeholder="Selected Image URL" value={selectedImage} isReadOnly />
        <Input placeholder="Ask a question about the image" value={question} onChange={handleQuestionChange} />
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={handleSendQuestion}>
          Send
        </Button>
        {answer && (
          <Box p={4} mt={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text fontWeight="bold">AI's Answer:</Text>
            <Text>{answer}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;