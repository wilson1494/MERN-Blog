export default function Post(){
    return(
      <div className="post">
      <div className="image">
      <img
        src="https://images.unsplash.com/photo-1717979514214-5f83c06a8af4?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3Ds"
        alt="contentImg"
      />
      </div>
      <div className="texts">
        <h2>test</h2>
        <p className="info">
          <a className="author">wilson</a>
          <time>2024-01-05 21:46</time>
          </p>
          <p className="summary">qwewewqewq</p>
      </div>
    </div>
    );
}