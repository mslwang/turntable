import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = (props) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [photo, setPhoto] = useState();
    const [desc, setDesc] = useState("");

    const handleSubmit = () => {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        let url = `/api/v1/users/${props.user_id}/recipes`
        axios.post(url, {
                title: title,
                author: author,
                photo: photo,
                desc: desc,
                id: props.user_id
        },  { headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf,
        }});
    }

    return (
        <Form onSubmit={handleSubmit()}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="text" id="title" value={title} onChange={e => setTitle({title: e.target.value})} />
      </FormGroup>
      <FormGroup>
        <Label for="author">Author</Label>
        <Input type="text" name="author" id="author" value={author} onChange={e => setAuthor({author: e.target.value})}/>
      </FormGroup>
      <FormGroup>
        <Label for="photo">Photo</Label>
        <Input type="file" name="file" id="photo" value={photo} onChange={e => setPhoto({photo: e.target.value})}/>
      </FormGroup>
      <FormGroup>
        <Label for="desc">Description</Label>
        <Input type="textarea" name="desc" id="desc" value={desc} onChange={e => setDesc({desc: e.target.value})} />
      </FormGroup>
      <Button onClick={handleSubmit()} className="btn"> Submit</Button>
    </Form>
    );

}

export default RecipeForm;