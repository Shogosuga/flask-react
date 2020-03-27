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
        this.state = { value : '' };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange (event) {
        this.setState({ value : event.target.value })
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
                        onChange : this.handleChange,
                        placeholder : 'タイトル',
                        className : 'editor-titlebox__title__input'
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

class MainBox extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            value :  ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange (event) {
        this.setState({ value : event.target.value });
    };

    render() {
        return e(
            'div',
            null,
            e(
                'div',
                { className : 'editor-main__dropzone' },
                e(
                    'textarea',
                    {
                        value : this.state.value,
                        onChange : this.handleChange,
                        placeholder : '本文を入力してください',
                        className : 'editor-main__dropzone__textarea'
                    }
                )
            ),
            e(
                'div',
                { className  : 'editor-main__dropzone__preview' },
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

ReactDOM.render(
    e(MainBox),
    document.getElementById('editor-main')
)