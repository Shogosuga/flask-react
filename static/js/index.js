const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class TitleBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value : 'タイトル' };
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange (title) {
        this.setState({ value : title.target.value })
    };

    render() {
        //return (
        //    <div>
        //        <p>
        //            { this.state.value }
        //        </p>
        //        <input value={ this.state.value } onChange={ this.handleChange } />
        //    </div>
        //)
        return e(
            'div',
            null,
            e(
                'p',
                null,
                this.state.value
            ),
            e(
                'input',
                {
                    value : this.state.value,
                    onChange : this.handleChange
                }
            )
        )
    };
};


const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);

//ReactDOM.render(
//    <TitleBox />,
//    document.getElementsByClassName('editor-titlebox__title')
//)
ReactDOM.render(
    e(TitleBox),
    document.getElementById('editor-titlebox__title')
)