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
        return e(
            'div',
            null,
            e(
                'div',
                { className : 'editor-titlebox__title' },
                e(
                    'input',
                    {
                        value : this.state.value,
                        onChange : this.handleChange
                    }
                )
            ),
            e(
                'div',
                { className : 'editor-titlebox__title__preview' },
                this.state.value
            )
        )
    };
};


const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);

ReactDOM.render(
    e(TitleBox),
    document.getElementById('editor-titlebox')
)