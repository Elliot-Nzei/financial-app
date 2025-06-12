from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from analysis import analyze_statement  # We'll create this function

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'data/'

# Ensure the upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        # Analyze the statement
        results = analyze_statement(filepath)
        return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
