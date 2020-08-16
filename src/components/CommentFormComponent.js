import React, { Component } from 'react';
import {Button, Row,Modal,Col,ModalHeader,ModalBody,Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class CommentForm extends Component
{
    constructor(props) {
        super(props); 
              
        this.state = {          
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);        

      }
    toggleModal() {
        
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
 handleSubmit(values) {
    // console.log('Current State is: ' + JSON.stringify(values));
    // alert('Current State is: ' + JSON.stringify(values));
    // this.props.resetFeedbackForm();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    //this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        // event.preventDefault();
    }
    
    render()
    {
        const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
        return(
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm  onSubmit={(values) => this.handleSubmit(values)}>
                    
                    <Row className="form-group">
                        <Label htmlFor="rating" className="font-weight-bold" md={12}>Rating</Label>
                                <Col md={{size: 3}}>
                                    <Control.select model=".ratingvalue" name="ratingvalue"
                                        className="form-control">                                        
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                    <Row className="form-group">
                                <Label htmlFor="author" className="font-weight-bold" md={12}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                        
                            <Row className="form-group">
                                <Label htmlFor="comment" className="font-weight-bold" md={12}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button color="primary" outline onClick={this.toggleModal}> Submit Comment</Button>
            </div>
        );
    }


}

export default CommentForm;
