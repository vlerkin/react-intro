import MyFooter from '@/components/footer';
interface PropsItems {
  text: string;
}

const ListItem = (props: PropsItems) => {
    const text = props.text;
    return <li>{text}</li>;
  };
   
  const About = () => {
    return (
      <div>
        <h1>About</h1>
        <p>This is my about page. Here are some details about me:</p>
        <ul>
          <ListItem text="I am learning to code 💻" />
          <ListItem text="I have a pet piranha 🐡" />
          <ListItem text="I like hiking active volcanoes 🥾" />
        </ul>
        <MyFooter />
      </div>
    );
  };
  
 
  export default About;