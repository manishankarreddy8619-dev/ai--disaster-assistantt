from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/get_help', methods=['POST'])
def get_help():
    data = request.json

    disaster = data.get('disaster', '')
    location = data.get('location', '')

    # 🔥 Simple logic (since GitHub can't run AI)
    if disaster.lower() == "flood":
        response = f"Move to higher ground in {location}. Avoid water."
    elif disaster.lower() == "fire":
        response = f"Exit the building quickly in {location}. Avoid smoke."
    elif disaster.lower() == "earthquake":
        response = f"Drop, cover, and hold in {location}."
    else:
        response = "Stay calm and follow safety instructions."

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
