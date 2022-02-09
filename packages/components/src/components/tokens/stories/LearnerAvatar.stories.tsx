import LearnerAvatar from '../LearnerAvatar';

export default {
  title: 'Tokens/LearnerAvatar',
  component: LearnerAvatar,
};

export const WithImage = {
  args: {
    learner: {
      name: 'Test',
      attributes: {
        avatar:
          'https://ik.imagekit.io/zpssuyh5b3/avas/user-07-a_3x_8-XNSOojg.png',
      },
    },
  },
};

export const JustName = {
  args: {
    learner: {
      name: 'Test',
      attributes: {
        avatar: '',
      },
    },
  },
};
