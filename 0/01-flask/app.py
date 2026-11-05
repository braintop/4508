from flask import Flask, jsonify, request

app = Flask(__name__)
items = []
@app.route('/')
def home():
    return jsonify({"message": "Hello, World!"})

@app.route('/items', methods=['GET'])
def get_items():
    return jsonify({"items": items})

@app.route('/items', methods=['POST'])
def create_item():
    data = request.get_json()
    items.append(data)
    return jsonify({"message": "Item created", "item": data}), 201

@app.route('/about')
def about():
    return jsonify({"message": "About page"}), 200
    # res.status_code(200).json({"message": "About page"})

@app.route("/hello/<name>")
def hello(name):
    return jsonify({"message": f"Hello {name}"})

@app.route("/square/<int:n>")
def square(n):
    return jsonify({"number": n, "square": n * n})


#/multiply?x=10&y=20
@app.route("/multiply")
def multiply():
    x = request.args.get("x", type=int)
    y = request.args.get("y", type=int)
    if x is None or y is None:
        return jsonify({"error": "x and y must be integers"}), 400
    return jsonify({"x": x, "y": y, "result": x * y})

if __name__ == "__main__":
    app.run(debug=True, port=5000)


# on js i use express 
# on python i use flask