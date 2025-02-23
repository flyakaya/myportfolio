import { useEffect, useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import { Post, PostsAPI } from '@services/api';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostsAPI.getPosts();
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography variant="h1" gutterBottom>
          Posts
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {post.body}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Posts; 